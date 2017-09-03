curl \
-H 'Authorization: Bearer <access_token>' \
https://api.particle.io/v1/devices

curl -X POST \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'arg=value&access_token=<token>' \
https://api.particle.io/v1/devices/<id>/<func>
