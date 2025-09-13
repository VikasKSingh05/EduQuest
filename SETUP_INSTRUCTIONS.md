# EduQuest Setup Instructions

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here

# Supabase Database
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## Database Setup

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Run the SQL commands from `supabase-schema.sql` to set up the database schema

## Features Implemented

### ✅ Authentication Flow
- Users sign in with Clerk
- After login, users are redirected to age selection
- Age selection determines course recommendations

### ✅ Dashboard
- Personalized dashboard based on age category
- Course recommendations for each age group:
  - **Kids (6-12)**: Zoo Adventure, Recycling Basics, Save Water
  - **Teens (13-18)**: Jungle Science, Climate Change 101, Sustainable Living
  - **Adults (19+)**: Green Energy, Policy & Environment, Environmental Economics

### ✅ Points System
- Points are awarded based on quiz performance
- Different quizzes have different base point values
- Perfect scores get bonus points
- Points are stored in Supabase and updated in real-time

### ✅ Leaderboard
- Real-time leaderboard with top 10 users
- Shows user's current rank
- Displays points and age category
- Updates automatically when new scores are submitted

### ✅ Quiz Integration
- Zoo and Jungle quizzes now save scores
- Automatic score submission when quiz is completed
- Progress tracking and completion feedback
- Navigation to leaderboard and dashboard after completion

## Database Schema

The database includes:
- `profiles` table: User information, points, age category
- `quiz_attempts` table: Individual quiz scores and attempts
- Functions for incrementing points and calculating ranks
- Row Level Security policies for data protection

## Usage Flow

1. User signs up/signs in
2. User selects age category
3. User is redirected to personalized dashboard
4. User takes recommended quizzes
5. Scores are automatically saved and points awarded
6. User can view leaderboard to see rankings
7. Real-time updates across all components

## Next Steps

To complete the setup:
1. Set up your Clerk account and get the publishable key
2. Set up your Supabase project and run the schema
3. Add the environment variables
4. Test the authentication flow
5. Try taking quizzes and checking the leaderboard
