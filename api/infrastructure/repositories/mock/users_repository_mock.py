class UsersRepositoryMock:
    def find_by_id(self):
        return None

    def find_by_email(self):
        return None

    def create(self):
        return True

    def update(self):
        return True
