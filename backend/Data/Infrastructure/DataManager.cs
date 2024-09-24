﻿using SportStore.server.Data.Contexts;
using SportStore.server.Data.Interfaces;
using SportStore.server.Data.Models;

namespace SportStore.server.Data.Infrastructure;

public class DataManager : IDisposable
{
    public readonly IRepository<Category> Categories;
    public readonly IRepository<Cart> Carts;
    public readonly IRepository<Order> Orders;
    public readonly IRepository<Product> Products;
    public readonly ApplicationDbContext ApplicationDbContext;

    public DataManager(
        IRepository<Category> categories,
        IRepository<Cart> orderItems,
        IRepository<Order> orders,
        IRepository<Product> products,
        ApplicationDbContext applicationDbContext
        )
    {
        Categories = categories;
        Carts = orderItems;
        Orders = orders;
        Products = products;
        ApplicationDbContext = applicationDbContext;
    }

    private bool _disposed;

    public virtual void Dispose(bool disposing)
    {
        if (!_disposed)
        {
            if (disposing)
            {
                ApplicationDbContext.Dispose();
            }
            _disposed = true;
        }
    }

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }
}