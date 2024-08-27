CREATE TABLE `kanji_radical_compositions` (
	`radical_id` integer NOT NULL,
	`kanji_id` integer NOT NULL,
	PRIMARY KEY(`radical_id`, `kanji_id`),
	FOREIGN KEY (`radical_id`) REFERENCES `radicals`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`kanji_id`) REFERENCES `kanji`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `voca_kanji_compositions` (
	`kanji_id` integer NOT NULL,
	`vocabulary_id` integer NOT NULL,
	PRIMARY KEY(`kanji_id`, `vocabulary_id`),
	FOREIGN KEY (`kanji_id`) REFERENCES `kanji`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`vocabulary_id`) REFERENCES `vocabulary`(`id`) ON UPDATE no action ON DELETE no action
);
