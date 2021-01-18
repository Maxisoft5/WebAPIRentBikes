using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace RentBikes.Services
{
    public class ControllerServices<TDataContext> where TDataContext : class
    {
        /// <summary>
        /// Logger factory.
        /// </summary>
        public ILoggerFactory LoggerFactory { get; }

        /// <summary>
        /// The current environment.
        /// </summary>
        public IHostingEnvironment Environment { get; }

        readonly Lazy<TDataContext> _dataContext;

        /// <summary>
        /// The data context.
        /// </summary>
        public TDataContext DataContext => _dataContext.Value;


        /// <summary>
        ///Initializes a new instance of this type.
        /// </summary>
        /// <param name="loggerFactory"></param>
        /// <param name="environment"></param>
        /// <param name="dataContext"></param>
        public ControllerServices(
            ILoggerFactory loggerFactory,
            IHostingEnvironment environment,
            Lazy<TDataContext> dataContext
            )
        {

            this.LoggerFactory = loggerFactory;
            this.Environment = environment ?? throw new ArgumentNullException(nameof(environment));
            this._dataContext = dataContext;
        }
    }
}

