from datetime import datetime
from sqlalchemy import TIMESTAMP, Boolean, Column, Integer, String, Text
from db.config import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, default=datetime.utcnow)
    updated_at = Column(TIMESTAMP(timezone=True), nullable=False,
                        onupdate=datetime.utcnow, default=datetime.utcnow)
