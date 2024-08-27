CREATE TABLE `radicals` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`level` integer NOT NULL,
	`character` text NOT NULL,
	`name` text NOT NULL,
	`mnemonic` text NOT NULL
);
