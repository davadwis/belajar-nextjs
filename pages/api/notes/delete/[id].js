export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "DELETE") {
    try {
      const response = await fetch(
        `https://paace-f178cafcae7b.nevacloud.io/api/notes/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        const data = await response.json();
        res.status(200).json(data);
      }
    } catch (error) {}
  }
}
