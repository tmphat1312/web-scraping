CREATE TABLE `common_usage_patterns` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`vocabulary_id` integer NOT NULL,
	`pattern` text NOT NULL,
	`sentences` text NOT NULL,
	FOREIGN KEY (`vocabulary_id`) REFERENCES `vocabulary`(`id`) ON UPDATE no action ON DELETE no action
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
	`context_sentences` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `levels_min_value_unique` ON `levels` (`min_value`);--> statement-breakpoint
CREATE UNIQUE INDEX `levels_max_value_unique` ON `levels` (`max_value`);--> statement-breakpoint
CREATE UNIQUE INDEX `levels_ja_name_unique` ON `levels` (`ja_name`);--> statement-breakpoint
CREATE UNIQUE INDEX `levels_en_name_unique` ON `levels` (`en_name`);