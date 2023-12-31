class TracksTypes:
    CRASH = "CRASH"
    RIDE = "RIDE"
    RIDE_BELL = "RIDE_BELL"
    SPLASH = "SPLASH"
    CHINA = "CHINA"
    COWBELL = "COWBELL"
    OPEN_HI_HAT = "OPEN_HI_HAT"
    CLOSED_HI_HAT = "CLOSED_HI_HAT"
    FOOT_HI_HAT = "FOOT_HI_HAT"
    SLOSH_HI_HAT = "SLOSH_HI_HAT"
    THREE_QUARTER_HI_HAT = "THREE_QUARTER_HI_HAT"
    HIGH_TOM = "HIGH_TOM"
    MIDDLE_TOM = "MIDDLE_TOM"
    FLOOR_TOM = "FLOOR_TOM"
    SNARE = "SNARE"
    RIMSHOT_SNARE = "RIMSHOT_SNARE"
    SIDESTICK_SNARE = "SIDESTICK_SNARE"
    KICK = "KICK"
    STICKS = "STICKS"


class Constants:
    def __init__(self):
        self.tracks_types = TracksTypes()


constants = Constants()
