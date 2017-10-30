CREATE TABLE events (
    eventid serial PRIMARY KEY NOT NULL,
    eventname VARCHAR(80),
    img text,
    eventdate text,
    eventdescription text
)