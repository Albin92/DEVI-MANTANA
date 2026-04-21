-- Run this in your Supabase SQL Editor to create the event_slots table

CREATE TABLE IF NOT EXISTS event_slots (
  event_key   TEXT PRIMARY KEY,
  is_open     BOOLEAN NOT NULL DEFAULT TRUE,
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Seed all events as open by default
INSERT INTO event_slots (event_key, is_open) VALUES
  ('CHAKRAVYUHA',   TRUE),
  ('VYUHANTARA',    TRUE),
  ('ROOPAYANTRA',   TRUE),
  ('UDBHAVA',       TRUE),
  ('SUTRADHARA',    TRUE),
  ('ASTRACODERS',   TRUE),
  ('BRAHMASTRA',    TRUE),
  ('DRISHTICHAKRA', TRUE)
ON CONFLICT (event_key) DO NOTHING;

-- Enable Row Level Security (optional but recommended)
ALTER TABLE event_slots ENABLE ROW LEVEL SECURITY;

-- Allow public read (so registration modal can check)
CREATE POLICY "Public read event_slots"
  ON event_slots FOR SELECT
  USING (true);

-- Allow authenticated users (admins) to update
CREATE POLICY "Auth update event_slots"
  ON event_slots FOR UPDATE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Auth insert event_slots"
  ON event_slots FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');
