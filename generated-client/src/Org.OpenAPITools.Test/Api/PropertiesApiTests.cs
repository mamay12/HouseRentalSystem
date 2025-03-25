/*
 * HousingRentalSystem
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;
using Microsoft.Extensions.DependencyInjection;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Model;


/* *********************************************************************************
*              Follow these manual steps to construct tests.
*              This file will not be overwritten.
*  *********************************************************************************
* 1. Navigate to ApiTests.Base.cs and ensure any tokens are being created correctly.
*    Take care not to commit credentials to any repository.
*
* 2. Mocking is coordinated by ApiTestsBase#AddApiHttpClients.
*    To mock the client, use the generic AddApiHttpClients.
*    To mock the server, change the client's BaseAddress.
*
* 3. Locate the test you want below
*      - remove the skip property from the Fact attribute
*      - set the value of any variables if necessary
*
* 4. Run the tests and ensure they work.
*
*/


namespace Org.OpenAPITools.Test.Api
{
    /// <summary>
    ///  Class for testing PropertiesApi
    /// </summary>
    public sealed class PropertiesApiTests : ApiTestsBase
    {
        private readonly IPropertiesApi _instance;

        public PropertiesApiTests(): base(Array.Empty<string>())
        {
            _instance = _host.Services.GetRequiredService<IPropertiesApi>();
        }

        /// <summary>
        /// Test CreateProperty
        /// </summary>
        [Fact (Skip = "not implemented")]
        public async Task CreatePropertyAsyncTest()
        {
            Client.Option<Property> property = default!;
            var response = await _instance.CreatePropertyAsync(property);
            var model = response.Created();
            Assert.IsType<Property>(model);
        }

        /// <summary>
        /// Test DeleteProperty
        /// </summary>
        [Fact (Skip = "not implemented")]
        public async Task DeletePropertyAsyncTest()
        {
            int id = default!;
            await _instance.DeletePropertyAsync(id);
        }

        /// <summary>
        /// Test GetAllProperties
        /// </summary>
        [Fact (Skip = "not implemented")]
        public async Task GetAllPropertiesAsyncTest()
        {
            var response = await _instance.GetAllPropertiesAsync();
            var model = response.Ok();
            Assert.IsType<List<Property>>(model);
        }

        /// <summary>
        /// Test GetPropertyById
        /// </summary>
        [Fact (Skip = "not implemented")]
        public async Task GetPropertyByIdAsyncTest()
        {
            int id = default!;
            var response = await _instance.GetPropertyByIdAsync(id);
            var model = response.Ok();
            Assert.IsType<Property>(model);
        }

        /// <summary>
        /// Test UpdateProperty
        /// </summary>
        [Fact (Skip = "not implemented")]
        public async Task UpdatePropertyAsyncTest()
        {
            int id = default!;
            Client.Option<Property> property = default!;
            var response = await _instance.UpdatePropertyAsync(id, property);
            var model = response.Ok();
            Assert.IsType<Property>(model);
        }
    }
}
