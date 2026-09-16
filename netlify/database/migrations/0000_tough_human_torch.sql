CREATE TABLE "budgets" (
	"category_id" text PRIMARY KEY NOT NULL,
	"amount" numeric NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" text PRIMARY KEY NOT NULL,
	"label" text NOT NULL,
	"emoji" text NOT NULL,
	"type" text NOT NULL,
	"is_default" boolean DEFAULT false NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "profile" (
	"id" integer PRIMARY KEY DEFAULT 1 NOT NULL,
	"person_one_name" text DEFAULT 'אלעד' NOT NULL,
	"person_two_name" text DEFAULT 'נויה' NOT NULL,
	"currency" text DEFAULT 'ILS' NOT NULL,
	"person_one_monthly_income" numeric DEFAULT '0' NOT NULL,
	"person_two_monthly_income" numeric DEFAULT '0' NOT NULL,
	"month_cycle_day" integer DEFAULT 1 NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "recurring_templates" (
	"id" text PRIMARY KEY NOT NULL,
	"type" text NOT NULL,
	"amount" numeric NOT NULL,
	"category_id" text,
	"description" text DEFAULT '' NOT NULL,
	"person" text,
	"payment_method" text DEFAULT '' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "transactions" (
	"id" text PRIMARY KEY NOT NULL,
	"type" text NOT NULL,
	"amount" numeric NOT NULL,
	"category_id" text,
	"date" text NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"person" text,
	"payment_method" text DEFAULT '' NOT NULL,
	"recurring" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "budgets" ADD CONSTRAINT "budgets_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "recurring_templates" ADD CONSTRAINT "recurring_templates_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;