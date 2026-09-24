import crypto from "node:crypto";

// built in nodejs module for cryptography

//security, hashing, encryption, decryption, signing, verifying

//hashing -> one way function, irreversible, fixed length output, deterministic

//creating random UUId, IDs
//creating secure tokens, passwords, salts
//hashing data
// to verify integrity of data, files, messages

//encryption -> two way function, reversible, variable length output, non-deterministic

//crypto.randomUUID() -> generates a random UUID (Universally Unique Identifier) using a cryptographically secure random number generator. It is commonly used for generating unique identifiers for objects, sessions, or any other entities that require a unique identifier.

//unique identifier, random, secure, cryptographically strong, collision-resistant
//user id, session id, transaction id, order id, file name, token

const requestId = crypto.randomUUID();

console.log("Request ID:", requestId);

//crypto.randomBytes() -> generates a buffer containing cryptographically strong pseudo-random bytes. It is commonly used for generating random data, such as salts, keys, or initialization vectors (IVs) for encryption algorithms.

//random bytes, secure, cryptographically strong, collision-resistant
//salt, key, iv, nonce, token
//password reset token, api key, email verification, session secret, session id, file name

//32 char string
const resetToken = crypto.randomBytes(16).toString("hex");

console.log("Reset Token:", resetToken);

//crypto.createHash

//hello -> hash

//hash -> hello

const text = "hello node";

const hash = crypto.createHash("sha256").update(text).digest("hex");
console.log(hash);

// crypto.createHmac

//normal hash : data -> hash

//HMAC: data + secret -> signed hash

//webhook
//signed tokens

const secret = "my-super-secret-key";
const message = "user_id=1";

const signature = crypto
  .createHmac("sha256", secret)
  .update(message)
  .digest("hex");

console.log(signature);

const signatureVerify = crypto
  .createHmac("sha256", secret)
  .update(message)
  .digest("hex");
console.log("signature is valid and matching", signature === signatureVerify);
