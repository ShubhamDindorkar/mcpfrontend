# Scripts Directory

This directory contains utility scripts for the project.

## Import Packages Script

The `import-packages.ts` script imports the scraped package data from the JSON file into the Supabase database using Prisma.

### Prerequisites

1. Make sure your database connection is properly configured in the `.env` file:

```
DATABASE_URL="postgresql://username:password@host:port/database?schema=public"
```

2. Ensure you have the necessary dependencies installed:

```
npm install
```

### Usage

Run the script with the following command:

```
npm run import-packages
```

### How it works

1. The script reads the `scraped-dependents.json` file
2. It processes the data in batches to avoid memory issues
3. For each package, it creates or updates a record in the database
4. It handles errors gracefully, ensuring the import process continues even if individual packages fail

### Customization

If your JSON file has a different structure, you may need to adjust the field mappings in the `packageData` object within the script. 