"""add user_id in todo table

Revision ID: ba7950cbec98
Revises: 627ad3ae9268
Create Date: 2023-05-31 13:56:07.750883

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "ba7950cbec98"
down_revision = "627ad3ae9268"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.add_column("todos", sa.Column("user_id", sa.Integer))
    op.create_foreign_key(
        "user_todo",
        "todos",
        "users",
        ["user_id"],
        ["id"],
    )


def downgrade() -> None:
    op.drop_constraint("user_todo", "todos", type_="foreignkey")
    op.drop_column("todos", "user_id")
