"""create tables

Revision ID: d97dcaff7055
Revises: 
Create Date: 2023-12-30 17:59:06.071069

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision: str = 'd97dcaff7055'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.String(length=36), nullable=False),
    sa.Column('external_id', sa.String(length=100), nullable=True),
    sa.Column('name', sa.String(length=256), nullable=False),
    sa.Column('email', sa.String(length=256), nullable=False),
    sa.Column('profile_picture', sa.String(length=256), nullable=True),
    sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
    sa.Column('updated_at', sa.DateTime(timezone=True), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_user_email'), 'user', ['email'], unique=True)
    op.create_index(op.f('ix_user_id'), 'user', ['id'], unique=False)
    op.create_table('kit',
    sa.Column('id', sa.String(length=36), nullable=False),
    sa.Column('name', sa.String(length=256), nullable=True),
    sa.Column('user_id', sa.String(length=36), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_kit_id'), 'kit', ['id'], unique=False)
    op.create_table('song',
    sa.Column('id', sa.String(length=36), nullable=False),
    sa.Column('name', sa.String(length=256), nullable=True),
    sa.Column('bpm', mysql.SMALLINT(), nullable=True),
    sa.Column('blocks', mysql.SMALLINT(), nullable=True),
    sa.Column('tracks', mysql.JSON(), nullable=True),
    sa.Column('kit', sa.String(length=256), nullable=True),
    sa.Column('user_id', sa.String(length=36), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_song_id'), 'song', ['id'], unique=False)
    op.create_table('track',
    sa.Column('id', sa.String(length=36), nullable=False),
    sa.Column('type', sa.String(length=256), nullable=True),
    sa.Column('name', sa.String(length=256), nullable=True),
    sa.Column('audio', sa.String(length=256), nullable=True),
    sa.Column('kit_id', sa.String(length=36), nullable=True),
    sa.ForeignKeyConstraint(['kit_id'], ['kit.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_track_id'), 'track', ['id'], unique=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_track_id'), table_name='track')
    op.drop_table('track')
    op.drop_index(op.f('ix_song_id'), table_name='song')
    op.drop_table('song')
    op.drop_index(op.f('ix_kit_id'), table_name='kit')
    op.drop_table('kit')
    op.drop_index(op.f('ix_user_id'), table_name='user')
    op.drop_index(op.f('ix_user_email'), table_name='user')
    op.drop_table('user')
    # ### end Alembic commands ###
