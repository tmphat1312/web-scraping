CREATE TABLE `visually_similar_kanji` (
	`kanji_id` integer NOT NULL,
	`similar_kanji_id` integer NOT NULL,
	PRIMARY KEY(`kanji_id`, `similar_kanji_id`),
	FOREIGN KEY (`kanji_id`) REFERENCES `kanji`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`similar_kanji_id`) REFERENCES `kanji`(`id`) ON UPDATE no action ON DELETE no action
);
