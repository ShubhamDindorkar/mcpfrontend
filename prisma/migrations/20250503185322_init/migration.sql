-- CreateTable
CREATE TABLE "packages" (
    "package_name" TEXT NOT NULL,
    "install_cmd" TEXT NOT NULL,
    "readme" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "packages_pkey" PRIMARY KEY ("package_name")
);
