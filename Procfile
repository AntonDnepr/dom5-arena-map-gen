release: python manage.py migrate --no-input && python manage.py parse_data
web: gunicorn --bind "${HOST:-0.0.0.0}:${PORT:-8000}" --log-file - --capture-output conf.wsgi:application
