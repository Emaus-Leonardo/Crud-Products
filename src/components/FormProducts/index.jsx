import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { login, createProducts } from "../../Api";

const productSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  description: z.string().nonempty("Descrição é obrigatória"),
  price: z.number().min(0, { message: "O preço deve ser maior ou igual a 0" }),
  status: z.number().min(0, "O status deve ser maior ou igual a 0"),
  stock_quantity: z.number().min(0, { message: "A quantidade em estoque deve ser maior ou igual a 0" }),
});

function FormProducts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const tokenResponse = await login();
      const accessToken = tokenResponse.access_token;
      const result = await createProducts(accessToken, data);
      console.log(result);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <main className="flex justify-center items-center">
      <form
        className="flex flex-col gap-5 w-[400px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Nome</label>
          <input type="text" {...register("name")} />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description">Descrição</label>
          <input type="text" {...register("description")} />
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="price">Preço</label>
          <input type="number" {...register("price", { valueAsNumber: true })} />
          {errors.price && (
            <span className="text-red-500">{errors.price.message}</span>
          )}
        </div>

        <div className="hidden flex flex-col gap-1">
          <label htmlFor="status">Status</label>
          <select {...register("status", { valueAsNumber: true  })}>
            <option value={1}>Em Estoque</option>
            <option value={2}>Em Reposição</option>
            <option value={3}>Em Falta</option>
          </select>
          {errors.status && (
            <span className="text-red-500">{errors.status.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="stock_quantity">Quantidade em Estoque</label>
          <input type="number" {...register("stock_quantity", { valueAsNumber: true })} />
          {errors.stock_quantity && (
            <span className="text-red-500">{errors.stock_quantity.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600"
        >
          Cadastrar
        </button>
      </form>
    </main>
  );
}


export default FormProducts;
