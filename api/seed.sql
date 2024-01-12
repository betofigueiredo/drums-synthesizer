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
    ('b8933af4-4cf0-41ae-b9be-bb42179dcaf9', 'CRASH', 'Crash', '/audio/bvkery/acoustic-ride-02.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('56b301a8-260c-433f-ba95-2f34d2c66f61', 'RIDE', 'Ride', '/audio/bvkery/acoustic-ride-03.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('cacae57a-c1cf-4890-bbd2-c7e275faf7c2', 'OPEN_HI_HAT', 'Open Hi Hat', '/audio/bvkery/acoustic-open-hat-04.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('a3aa53f2-a920-4a19-919d-a2088ffb78fc', 'CLOSED_HI_HAT', 'Closed Hi Hat', '/audio/bvkery/acoustic-closed-hat-04.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('6655bd85-c2a5-48d7-9a06-50ad9439228a', 'HIGH_TOM', 'High Tom', '/audio/bvkery/acoustic-high-tom-12.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('16b3224f-b670-4243-9e0f-d1bfa7e3067e', 'MIDDLE_TOM', 'Middle Tom', '/audio/bvkery/acoustic-mid-tom-12.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('841bcbb2-bc76-4ea7-837c-7af78e91d6f7', 'FLOOR_TOM', 'Floor Tom', '/audio/bvkery/acoustic-floor-low-06.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('11000ab4-8a70-40b6-8553-7c4905d4aad2', 'SNARE', 'Snare', '/audio/bvkery/acoustic-snare-06.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0'),
    ('e324df37-8431-4366-beba-68bd52727ba2', 'KICK', 'Kick', '/audio/bvkery/acoustic-kick-03.wav', '6e427a8d-3b80-4bf5-8f81-31ac3f7f7ad0')
