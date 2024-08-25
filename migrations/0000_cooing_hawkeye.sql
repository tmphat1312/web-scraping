CREATE TABLE `context_pattern_sentences` (
	`vocabulary_id` integer,
	`pattern_number` integer,
	`pattern_sentence_number` integer NOT NULL,
	`jp_sentence` text NOT NULL,
	`en_sentence` text NOT NULL,
	PRIMARY KEY(`vocabulary_id`, `pattern_number`, `pattern_sentence_number`),
	FOREIGN KEY (`vocabulary_id`) REFERENCES `vocabulary`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`pattern_number`) REFERENCES `context_patterns`(`pattern_number`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `context_patterns` (
	`vocabulary_id` integer,
	`pattern_number` integer NOT NULL,
	`pattern` text NOT NULL,
	PRIMARY KEY(`vocabulary_id`, `pattern_number`),
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
	`kanji_id` integer,
	`radical_id` integer,
	PRIMARY KEY(`kanji_id`, `radical_id`),
	FOREIGN KEY (`kanji_id`) REFERENCES `kanji`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`radical_id`) REFERENCES `radicals`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `levels` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`jp_name` text NOT NULL,
	`en_name` text NOT NULL,
	`min_value` integer NOT NULL,
	`max_value` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `radicals` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`level` integer NOT NULL,
	`character` text NOT NULL,
	`primary_meaning` text NOT NULL,
	`alternative_meanings` text,
	`mnemonic` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `visually_similar_kanji` (
	`kanji_src_id` integer,
	`kanji_dst_id` integer,
	PRIMARY KEY(`kanji_src_id`, `kanji_dst_id`),
	FOREIGN KEY (`kanji_src_id`) REFERENCES `kanji`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`kanji_dst_id`) REFERENCES `kanji`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `vocabulary` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`level` integer NOT NULL,
	`primary_meaning` text NOT NULL,
	`alternative_meanings` text,
	`word_types` text NOT NULL,
	`meaning_explanation` text NOT NULL,
	`reading_explanation` text
);
--> statement-breakpoint
CREATE TABLE `vocabulary_kanji_compositions` (
	`kanji_id` integer,
	`vocabulary_id` integer,
	PRIMARY KEY(`kanji_id`, `vocabulary_id`),
	FOREIGN KEY (`kanji_id`) REFERENCES `kanji`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`vocabulary_id`) REFERENCES `vocabulary`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `vocabulary_readings` (
	`vocabulary_id` integer,
	`reading_number` integer NOT NULL,
	`reading` text NOT NULL,
	`actor_id` integer,
	`sources` text NOT NULL,
	PRIMARY KEY(`vocabulary_id`, `reading_number`),
	FOREIGN KEY (`vocabulary_id`) REFERENCES `vocabulary`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`actor_id`) REFERENCES `voice_actors`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `voice_actors` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `kanji_character_unique` ON `kanji` (`character`);--> statement-breakpoint
CREATE UNIQUE INDEX `levels_jp_name_unique` ON `levels` (`jp_name`);--> statement-breakpoint
CREATE UNIQUE INDEX `levels_en_name_unique` ON `levels` (`en_name`);--> statement-breakpoint
CREATE UNIQUE INDEX `levels_min_value_unique` ON `levels` (`min_value`);--> statement-breakpoint
CREATE UNIQUE INDEX `levels_max_value_unique` ON `levels` (`max_value`);--> statement-breakpoint
CREATE UNIQUE INDEX `radicals_character_unique` ON `radicals` (`character`);--> statement-breakpoint
CREATE UNIQUE INDEX `radicals_primary_meaning_unique` ON `radicals` (`primary_meaning`);--> statement-breakpoint
CREATE UNIQUE INDEX `voice_actors_name_unique` ON `voice_actors` (`name`);