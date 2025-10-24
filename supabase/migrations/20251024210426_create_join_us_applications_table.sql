/*
  # Create join_us_applications table

  1. New Tables
    - `join_us_applications`
      - `id` (uuid, primary key) - Unique identifier for each application
      - `first_name` (text) - Applicant's first name
      - `email` (text) - Applicant's email address
      - `location` (text) - City and country location
      - `improvement_areas` (text array) - Areas they can help improve
      - `university_degrees` (text) - List of completed degrees
      - `linkedin_profile` (text) - LinkedIn profile URL
      - `work_vision` (text) - How they envision working with us
      - `team_fit` (text) - Why we would enjoy working with them
      - `performance_needs` (text) - What they need to perform at their best
      - `passion` (text) - What makes them passionate about their work
      - `cv_file_path` (text) - Path to uploaded CV file
      - `additional_comments` (text) - Any additional information
      - `created_at` (timestamptz) - Timestamp of submission
      
  2. Security
    - Enable RLS on `join_us_applications` table
    - Add policy for anonymous users to insert applications
    - Add policy for authenticated users to view their own applications
*/

CREATE TABLE IF NOT EXISTS join_us_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  email text NOT NULL,
  location text NOT NULL,
  improvement_areas text[] NOT NULL,
  university_degrees text DEFAULT '',
  linkedin_profile text DEFAULT '',
  work_vision text DEFAULT '',
  team_fit text DEFAULT '',
  performance_needs text DEFAULT '',
  passion text DEFAULT '',
  cv_file_path text DEFAULT '',
  additional_comments text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE join_us_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit applications"
  ON join_us_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can view own applications"
  ON join_us_applications
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text);