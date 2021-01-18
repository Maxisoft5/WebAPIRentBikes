﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace RentBikes.DataAccess.Repositories.Interfaces
{
    public interface IBaseRepository<TEntity> where TEntity : class
    {
        Task<TEntity> Create(TEntity item);
        Task<List<TEntity>> GetItems();
        Task<TEntity> Get(int id);
        Task<TEntity> Delete(int id);
        Task<TEntity> Update(TEntity item);
    }
}
