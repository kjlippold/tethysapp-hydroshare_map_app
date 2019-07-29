from tethys_sdk.base import TethysAppBase, url_map_maker


class HydroshareMapApp(TethysAppBase):
    """
    Tethys app class for HydroShare Map App.
    """

    name = 'HydroShare Map App'
    index = 'hydroshare_map_app:home'
    icon = 'hydroshare_map_app/images/globe.png'
    package = 'hydroshare_map_app'
    root_url = 'hydroshare-map-app'
    color = '#87CEEB'
    description = 'This app can display HydroShare geospatial feature data on a map.'
    tags = 'GIS, HydroShare'
    enable_feedback = False
    feedback_emails = []

    def url_maps(self):
        """
        Add controllers
        """
        UrlMap = url_map_maker(self.root_url)

        url_maps = (
            UrlMap(
                name='home',
                url='hydroshare-map-app',
                controller='hydroshare_map_app.controllers.home'
            ),
        )

        return url_maps
