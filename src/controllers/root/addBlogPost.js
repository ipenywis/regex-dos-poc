import CachePolicy from "http-cache-semantics";

/**
 * Echo endpoint
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const addBlogPost = (req, res) => {
  const { title, content } = req.body;

  // 👀 Simple ReDOS
  // const regex = /^(a+)+$/;
  // const maliciousInput = "a".repeat(20000000) + "X";
  // const trimmedContent = regex.test(maliciousInput);

  //➡️ http-cache-semantics vulnerability POC
  // const regex = /\s*,\s*/;
  // const cacheControlHeader = "cache-control: max-age=604800, must-revalidate";
  // const badCacheControlHeader =
  //   `cache-control: max-age=604800` + " ".repeat(7000000) + "must-revalidate";
  // const splitCache = badCacheControlHeader.split(regex);
  // console.log("Split: ", splitCache);

  //➡️ http-cache-semantics vulnerable version <= v4.1.0
  res.header("cache-control", "public," + " ".repeat(1000) + "max-age=7234");
  res.headers = res.getHeaders();
  const policy = new CachePolicy(req, res);
  console.log("http-cache-semantics policy: ", policy);

  res.json({ status: "Success", message: "Blog Post published successfully!" });
};

export default addBlogPost;
