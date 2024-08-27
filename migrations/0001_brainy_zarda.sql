CREATE TABLE `kanji` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`level` integer NOT NULL,
	`character` text NOT NULL,
	`primary_meaning` text NOT NULL,
	`alternative_meanings` text,
	`meaning_mnemonic` text NOT NULL,
	`meaning_hints` text,
	`kunyomi_reading` text,
	`onyomi_reading` text,
	`nanori_reading` text,
	`reading_mnemonic` text NOT NULL,
	`reading_hints` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `kanji_character_unique` ON `kanji` (`character`);