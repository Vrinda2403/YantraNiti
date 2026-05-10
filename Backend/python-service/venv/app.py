from flask import Flask, request, jsonify
from skyfield.api import load
from astropy.coordinates import EarthLocation
import astropy.units as u

app = Flask(__name__)

planets = load('de421.bsp')
ts = load.timescale()

@app.route('/calculate', methods=['POST'])
def calculate():

    data = request.json

    latitude = data['latitude']
    longitude = data['longitude']

    earth = planets['earth']
    mars = planets['mars']

    t = ts.now()

    astrometric = earth.at(t).observe(mars)

    ra, dec, distance = astrometric.radec()

    geometry_data = {
        'rotationX': ra.hours,
        'rotationY': dec.degrees,
        'distance': distance.au
    }

    return jsonify({
        'planetaryData': {
            'ra': str(ra),
            'dec': str(dec)
        },
        'geometryData': geometry_data
    })

if __name__ == '__main__':
    app.run(port=5001)