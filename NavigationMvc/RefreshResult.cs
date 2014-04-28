﻿using System;
using System.Web.Mvc;

namespace Navigation.Mvc
{
	public class RefreshResult : ActionResult
	{
		public RefreshResult() : this(null)
		{
		}

		public RefreshResult(NavigationData toData)
		{
			ToData = toData;
		}

		public NavigationData ToData
		{
			get;
			private set;
		}

		public override void ExecuteResult(ControllerContext context)
		{
			if (context == null)
			{
				throw new ArgumentNullException("context");
			}
			if (context.IsChildAction)
			{
				throw new InvalidOperationException();
			}
			context.Controller.TempData.Keep();
			StateController.Refresh(ToData);
		}
	}
}
