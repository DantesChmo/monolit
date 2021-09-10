SELECT 'CREATE DATABASE words'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'words')