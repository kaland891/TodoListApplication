from datetime import datetime
from sqlalchemy import TIMESTAMP, Boolean, Column, Integer, Text, ForeignKey


class Todo:
    __tablename__ = "todos"

    id = Column(Integer, primary_key=True, index=True)
    is_done = Column(Boolean, default=False)
    content = Column(Text, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    created_at = Column(
        TIMESTAMP(timezone=True), nullable=False, default=datetime.utcnow
    )
    updated_at = Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        onupdate=datetime.utcnow,
        default=datetime.utcnow,
    )
