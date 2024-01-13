--
-- Bvkery kit
INSERT INTO kit (
    id, name
) 
VALUES (
    '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0', 'Bvkery'
)

--
-- Bvkery tracks
INSERT INTO track (
    id, type, name, audio, kit_id
) VALUES
    ('a3aa53f2-a920-4a19-919d-a2088ffb78fc', 'CLOSED_HI_HAT', 'Closed Hi Hat', '/audio/bvkery/closed-hi-hat.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('7bd61627-10e8-4394-983a-9ac72fde8975', 'COWBELL', 'Cowbell', '/audio/bvkery/cowbell.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('b8933af4-4cf0-41ae-b9be-bb42179dcaf9', 'CRASH', 'Crash', '/audio/bvkery/crash.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('841bcbb2-bc76-4ea7-837c-7af78e91d6f7', 'FLOOR_TOM', 'Floor Tom', '/audio/bvkery/floor-tom.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('077bda42-1da2-43e8-90c3-4c20f4c151d1', 'FOOT_HI_HAT', 'Foot Hi Hat', '/audio/bvkery/foot-hi-hat.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('6655bd85-c2a5-48d7-9a06-50ad9439228a', 'HIGH_TOM', 'High Tom', '/audio/bvkery/high-tom.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('e324df37-8431-4366-beba-68bd52727ba2', 'KICK', 'Kick', '/audio/bvkery/kick.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('16b3224f-b670-4243-9e0f-d1bfa7e3067e', 'MIDDLE_TOM', 'Middle Tom', '/audio/bvkery/middle-tom.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('cacae57a-c1cf-4890-bbd2-c7e275faf7c2', 'OPEN_HI_HAT', 'Open Hi Hat', '/audio/bvkery/open-hi-hat.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('56b301a8-260c-433f-ba95-2f34d2c66f61', 'RIDE_BELL', 'Ride Bell', '/audio/bvkery/ride-bell.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('d363804c-bb47-4bd8-be2c-d322adb8d2bb', 'RIDE', 'Ride', '/audio/bvkery/ride.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('11000ab4-8a70-40b6-8553-7c4905d4aad2', 'SIDESTICK_SNARE', 'Sidestick Snare', '/audio/bvkery/sidestick-snare.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('ab9e2966-2be5-46cd-996a-6972253a6d0c', 'SNARE', 'Snare', '/audio/bvkery/snare.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('82c7ea96-44bd-4e99-9857-431e2129afbd', 'STICKS', 'Sticks', '/audio/bvkery/sticks.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0')
