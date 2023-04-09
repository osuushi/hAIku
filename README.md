# hAIku

hAIku is an LLM based creative writing party game. The object of the game is to
compete with ChatGPT and your friends to write the best haiku, and try to guess
which poem was written by a robot impostor.

# Installation

Clone the repo and then install with yarn via `yarn install`. The simplest
option is then to run the dev server with `yarn dev`, and then navigate to the
localhost link provided.

You will need to provide an API key in the settings in the web app. Note that
this game will incur OpenAI API charges, although they will be very small,
particularly with ChatGPT 3.5.

# How to play

Detailed instructions are provided in the web app, but to summarize:

1. Players take turns being the "AI Controller" and coming up with a theme for the haiku
2. The AI Controller prompts the AI and writes down its haiku
3. The poets each write down their own haiku based on the theme
4. Players vote on which haiku they think is the best, as well as which haiku
   they think was written by the AI
5. Players get points for guessing right, and for the votes they get. The AI
   Controller gets points based on the votes the AI's gets, and a bonus if all
   players are fooled.

# Hosting

This is a prototype of a game which requires you to run it locally. Since it
requires an OpenAI key from the user, it's not really built to be hosted
publicly (it's not really a good idea to ask users to paste their secret into a
random website).

But if you want to fork this and make a hosted version with a proper backend, go
for it!