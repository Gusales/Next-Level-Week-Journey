import pytest

from uuid import uuid4
from src.models.settings.db_connection_handle import db_connection_handler
from .emails_to_invite_repository import EmailsToInviteRepository

db_connection_handler.connect()
trip_id = str(uuid4())

@pytest.mark.skip(reason="Testes de integração com o banco de dados")
def test_registry_email():
  conn = db_connection_handler.get_connection()
  emails_to_invite_repository = EmailsToInviteRepository(conn)

  email_data = {
    "id": str(uuid4()),
    "trip_id": trip_id,
    "email": "gussales14@gmail.com"
  }

  emails_to_invite_repository.registry_email(email_data)

@pytest.mark.skip(reason="Testes de integração com o banco de dados")
def test_fetch_emails_from_trip():
  conn = db_connection_handler.get_connection()
  emails_to_invite_repository = EmailsToInviteRepository(conn)

  emails = emails_to_invite_repository.fetch_emails_from_trip(trip_id)
  print(emails)