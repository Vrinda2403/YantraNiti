from flask import Flask, jsonify, request
from flask_cors import CORS
from astropy.coordinates import get_sun, AltAz, EarthLocation
from astropy.time import Time
import astropy.units as u
import math

app = Flask(__name__)
CORS(app) # Necessary for React to talk to Flask

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    lat = float(data.get('lat', 28.6139))  # Default to Delhi
    lon = float(data.get('lon', 77.2090))
    
    # 1. Astronomical Calculation
    loc = EarthLocation(lat=lat*u.deg, lon=lon*u.deg, height=0*u.m)
    now = Time.now()
    sun = get_sun(now).transform_to(AltAz(obstime=now, location=loc))
    
    # 2. Parametric Geometry Data
    # For a Samrat Yantra, the hypotenuse angle must equal the latitude
    # We return these to the frontend to update the 3D model
    return jsonify({
        "gnomon_angle": lat,
        "sun_altitude": sun.alt.deg,
        "sun_azimuth": sun.az.deg,
        "local_time": now.iso
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)