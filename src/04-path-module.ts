// build and read file paths

import path from "node:path";

//const filePath = projectRoot + "/upload" + filename;

//path.join : uses the correct seperator for the current os
// /users/shem/project/file.txt

// c:\users\shem\project\file.txt

// process.cwd: the folder from where the nnode js was started

const projectRoot = process.cwd();

console.log(projectRoot);

// /uploads/users/42/profile.photo.png

const userId = "42";
const originalName = "profile.photo.png";

// imp-> path.join -> creates a path string
// it will not create the folder
// it does not check whether the file exist or not

const uploadFilePath = path.join(
  projectRoot,
  "uploads",
  "users",
  userId,
  originalName,
);

console.log(uploadFilePath);
