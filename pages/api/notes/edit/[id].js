export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "PATCH") {
    try {
      const editData = req.body;
      const response = await fetch(
        `https://paace-f178cafcae7b.nevacloud.io/api/notes/update/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify(editData),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        const data = await response.json();
        res.status(200).json(data);
      }
    } catch (error) {}
  }
}
