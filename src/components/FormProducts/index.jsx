import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { login, createProducts, editProduct } from "../../Api";

const productSchema = z.object({
  id: z.number().min(0, { message: "Nome é obrigatório" }),
  name: z.string().nonempty("Nome é obrigatório"),
  description: z.string().nonempty("Descrição é obrigatória"),
  price: z.number().min(0, { message: "O preço deve ser maior ou igual a 0" }),
  status: z.number().min(0, "O status deve ser maior ou igual a 0"),
  stock_quantity: z.number().min(0, { message: "A quantidade em estoque deve ser maior ou igual a 0" }),
});

const FormProducts = forwardRef(({ isEditing, editingProduct, onCloseModal, onProductCreated }, ref) => {
  const [editMode, setEditMode] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: editingProduct || {
      id: 1,
      name: "",
      description: "",
      price: "",
      status: 1,
      stock_quantity: "",
    },
  });

  useEffect(() => {
    if (isEditing && editingProduct) {
      reset(editingProduct);
      setEditMode(true);
    } else {
      setEditMode(false);
    }
  }, [isEditing, editingProduct, reset]);

  const onSubmit = async (data) => {
    try {
      const tokenResponse = await login();
      if (isEditing) {
        const confirmed = window.confirm("Tem certeza que deseja atualizar este produto?");
        if (!confirmed) return; // Se clicado em cancelar, sai da função

        // Se estiver em modo de edição, a função editProduct é chamada
        const result = await editProduct(tokenResponse.access_token, editingProduct.id, data);
        console.log(result);
        toast.success("Produto atualizado com sucesso!");
      } else {
        // Caso contrario, a função createProducts é chamada
        const result = await createProducts(tokenResponse.access_token, data);
        console.log(result);
        toast.success("Produto cadastrado com sucesso!");
      }
      onProductCreated();
      onCloseModal();
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
      toast.error("Erro ao salvar produto.");
    }
  };


  useImperativeHandle(ref, () => ({
    resetForm: () => reset()
  }));
''
  return (
    <main className="flex justify-center items-center">
      <form
        className="flex flex-col gap-5 w-[400px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="hidden flex-col gap-1">
          <label htmlFor="name">Id</label>
          <input
            className="h-8 w-full outline-none bg-[#F5F5F5] rounded px-2 shadow-2xl"
            placeholder="digite o nome do produto"
            type="number" {...register("id", { valueAsNumber: true })} />
          {errors.id && (
            <span className="text-red-500">{errors.id.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="name">Nome</label>
          <input
            className="h-8 w-full outline-none bg-[#F5F5F5] rounded px-2 shadow-2xl"
            placeholder="digite o nome do produto"
            type="text" {...register("name")} />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description">Descrição</label>
          <input
            className="h-8 w-full outline-none bg-[#F5F5F5] rounded px-2 shadow-2xl"
            placeholder="digite a descrição do produto "
            type="text" {...register("description")} />
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="price">Preço</label>
          <input
            className="h-8 w-full outline-none bg-[#F5F5F5] rounded px-2 shadow-2xl"
            placeholder="digite um preço"
            type="number" {...register("price", { valueAsNumber: true })} />
          {errors.price && (
            <span className="text-red-500">{errors.price.message}</span>
          )}
        </div>

        {editMode && (
          <div className="flex flex-col gap-1">
            <label htmlFor="status">Status</label>
            <select
              className="h-8 w-full outline-none bg-[#F5F5F5] rounded px-2 shadow-2xl" {...register("status", { valueAsNumber: true })}>
              <option value={1}>Em Estoque</option>
              <option value={2}>Em Reposição</option>
              <option value={3}>Em Falta</option>
            </select>
            {errors.status && (
              <span className="text-red-500">{errors.status.message}</span>
            )}
          </div>
        )}

        <div className="flex flex-col gap-1">
          <label htmlFor="stock_quantity">Quantidade em Estoque</label>
          <input
            className="h-8 w-full outline-none bg-[#F5F5F5] rounded px-2 shadow-2xl"
            placeholder="digite a quantidade"
            type="number" {...register("stock_quantity", { valueAsNumber: true })} />
          {errors.stock_quantity && (
            <span className="text-red-500">{errors.stock_quantity.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-emerald-500 mt-3 rounded font-semibold text-white h-10 hover:bg-emerald-600 transition-all duration-300"
        >
          {isEditing ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </main>
  );
});

export default FormProducts;
