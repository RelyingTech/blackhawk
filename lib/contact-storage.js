import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const storageDirectory = path.join(process.cwd(), "storage");
const storageFile = path.join(storageDirectory, "contact-submissions.json");

async function readSubmissions() {
  try {
    const file = await readFile(storageFile, "utf8");
    const parsed = JSON.parse(file);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error && typeof error === "object" && error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

export async function saveContactSubmission(submission) {
  await mkdir(storageDirectory, { recursive: true });

  const existing = await readSubmissions();
  const next = [
    {
      id: randomUUID(),
      submittedAt: new Date().toISOString(),
      ...submission,
    },
    ...existing,
  ];

  await writeFile(storageFile, JSON.stringify(next, null, 2), "utf8");

  return next[0];
}
