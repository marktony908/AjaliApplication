from flask_sqlalchemy import SQLAlchemy, session

# Initialize extensions
db = SQLAlchemy()


# Export both extensions
__all__ = ['db']