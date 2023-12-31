import pendulum
from datetime import datetime


class Datetimes:
    def get_today(self):
        today = pendulum.now()
        # today = datetime.now(timezone.utc)
        return {"as_date": today, "as_string": str(today)}

    def difference_in_days(self, start_date, end_date):
        date1 = pendulum.parse(start_date)  # type: ignore
        date2 = pendulum.parse(end_date)  # type: ignore
        return date1.diff(date2, False).in_days()  # type: ignore

    def format_timestamp(self, timestamp):
        return datetime.fromtimestamp(timestamp).strftime("%Y-%m-%d %H:%M:%S%z")

    def add_time(
        self,
        date: str,
        type: str,
        amount: int,
    ):
        new_date = pendulum.parse(date)  # type: ignore
        if type == "months":
            return new_date.add(months=amount).add(days=7)  # type: ignore
        if type == "years":
            return new_date.add(years=amount).add(days=7)  # type: ignore
        return new_date
