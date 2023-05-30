"""create user table

Revision ID: 627ad3ae9268
Revises: bb9dd166b2ca
Create Date: 2023-05-30 19:52:19.286687

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '627ad3ae9268'
down_revision = 'bb9dd166b2ca'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "users",
        sa.Column("id", sa.Integer, primary_key=True, index=True),
        sa.Column("name", sa.String, nullable=False),
        sa.Column("email", sa.String, unique=True, index=True, nullable=False),
        sa.Column("hashed_password", sa.String, nullable=False),
        sa.Column("created_at", sa.TIMESTAMP, nullable=False),
        sa.Column("updated_at", sa.TIMESTAMP, nullable=False)
    )


def downgrade() -> None:
    op.drop_table("users")
