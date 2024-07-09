import pytest

from uuid import uuid4
from datetime import datetime, timedelta
from .trips_repository import TripsRepository
from src.models.settings.db_connection_handle import db_connection_handler

db_connection_handler.connect()
trip_id = str(uuid4())

@pytest.mark.skip(reason="Testes de integração com o banco de dados")
def test_create_trip():
  conn = db_connection_handler.get_connection()
  trips_repository = TripsRepository(conn)

  trips_data = {
    "id": trip_id,
    "destination": "Vit. da Conquista",
    "start_date": datetime.strptime("11-07-2024", "%d-%m-%Y"),
    "end_date": datetime.strptime("11-07-2024", "%d-%m-%Y") + timedelta(days=18),
    "owner_name": "Adriana Sales",
    "owner_email": "adrianasales18@hotmail.com"
  }

  trips_repository.create_trip(trips_data)

@pytest.mark.skip(reason="Testes de integração com o banco de dados")
def test_find_trip_by_id():
  conn = db_connection_handler.get_connection()
  trips_repository = TripsRepository(conn)

  trip = trips_repository.find_trip_by_id(trip_id)
  print()
  print(trip)

@pytest.mark.skip(reason="Testes de integração com o banco de dados")
def test_update_trip_status():
  conn = db_connection_handler.get_connection()
  trips_repository = TripsRepository(conn)

  trips_repository.update_trip_status(trip_id)

