CREATE TABLE beers (
beerid serial primary key NOT NULL,
beername VARCHAR(80),
img text,
style VARCHAR(40),
abv integer,
ibu integer,
beerdescription text
);