export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST":
        const createData = req.body;
        const response = await fetch(
          "https://paace-f178cafcae7b.nevacloud.io/api/notes",
          {
            method: "POST",
            body: JSON.stringify(createData),
            headers: { "Content-Type": "application/json" },
          }
        );
        const result = await response.json();
        res.status(200).json(result);

        break;

      default:
        res.status(405).end();
        break;
    }
  } catch (error) {}
}
