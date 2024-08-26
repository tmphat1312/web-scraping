CREATE TABLE `common_usage_patterns` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`vocabulary_id` integer NOT NULL,
	`pattern` text NOT NULL,
	`sentences` text,
	FOREIGN KEY (`vocabulary_id`) REFERENCES `vocabulary`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
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
CREATE TABLE `kanji_radical_compositions` (
	`radical_id` integer NOT NULL,
	`kanji_id` integer NOT NULL,
	PRIMARY KEY(`radical_id`, `kanji_id`),
	FOREIGN KEY (`radical_id`) REFERENCES `radicals`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`kanji_id`) REFERENCES `kanji`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `levels` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`min_value` integer NOT NULL,
	`max_value` integer NOT NULL,
	`ja_name` text NOT NULL,
	`en_name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `radicals` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`level` integer NOT NULL,
	`character` text NOT NULL,
	`name` text NOT NULL,
	`mnemonic` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `visually_similar_kanji` (
	`kanji_id` integer NOT NULL,
	`similar_kanji_id` integer NOT NULL,
	PRIMARY KEY(`kanji_id`, `similar_kanji_id`),
	FOREIGN KEY (`kanji_id`) REFERENCES `kanji`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`similar_kanji_id`) REFERENCES `kanji`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `voca_kanji_compositions` (
	`kanji_id` integer NOT NULL,
	`radical_id` integer NOT NULL,
	PRIMARY KEY(`kanji_id`, `radical_id`),
	FOREIGN KEY (`kanji_id`) REFERENCES `kanji`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`radical_id`) REFERENCES `vocabulary`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `vocabulary` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`level` integer NOT NULL,
	`character` text NOT NULL,
	`primary_meaning` text NOT NULL,
	`alternative_meanings` text,
	`word_types` text NOT NULL,
	`meaning_explanation` text NOT NULL,
	`reading_explanation` text NOT NULL,
	`readings` text NOT NULL,
	`context_sentences` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `kanji_character_unique` ON `kanji` (`character`);--> statement-breakpoint
CREATE UNIQUE INDEX `levels_min_value_unique` ON `levels` (`min_value`);--> statement-breakpoint
CREATE UNIQUE INDEX `levels_max_value_unique` ON `levels` (`max_value`);--> statement-breakpoint
CREATE UNIQUE INDEX `levels_ja_name_unique` ON `levels` (`ja_name`);--> statement-breakpoint
CREATE UNIQUE INDEX `levels_en_name_unique` ON `levels` (`en_name`);