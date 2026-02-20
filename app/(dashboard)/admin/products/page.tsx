"use client"; 

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import CategoryTable from "../../components/products/product-table";
import CategoryModal from "../../components/products/product-modal";
import { useState } from "react";

const CategoryManagement = () => {
const [isOpen, setIsOpen] = useState(false)

const handleCloseModal = () => {
    setIsOpen(false);
  };

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">Product Management</h1>
                    <p className="opacity-50">Manage your inventory, prices and stock.</p>
                </div>
                <Button className="rounded-lg" onClick={() => setIsOpen(true)}>
                    <FiPlus size={24}/>
                    Add Product
                </Button>
            </div>
            <CategoryTable/>
            <CategoryModal isOpen={isOpen} onClose={handleCloseModal}/>
        </div>
    );
};

export default CategoryManagement;