import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import { Controller } from "react-hook-form";

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const SubmitReviewMutation = useMutation({
    mutationFn: (data) => {
      return axios.post("http://localhost:8080/tutorships/evaluate", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
  });

  const { asesoriaId } = useParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar la reseña
    // // Reiniciar el formulario
    // setRating(0);
    // setDescription("");

    // Enviar la reseña al servidor
    const data = {
      rating: rating,
      description: description,
      tutorshipId: parseInt(asesoriaId),
    };
    console.log(data);
    await SubmitReviewMutation.mutate(data, {
      onSuccess: () => {
        navigate("/buscar-tutor");
      },
      onError: (error) => {
        console.error(error);
        // setError("root", {
        //   message: error.message,
        // });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 mt-16">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Calificación
        </label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`focus:outline-none ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
            >
              <Star className="w-8 h-8 fill-current" />
            </button>
          ))}
        </div>
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Descripción
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Escribe tu reseña aquí..."
          className="min-h-[100px]"
        />
      </div>
      <Button type="submit" className="w-full">
        Enviar Reseña
      </Button>
    </form>
  );
}
