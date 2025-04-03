CREATE OR REPLACE FUNCTION public.filter_by_polygon(sw_lng double precision, sw_lat double precision, ne_lng double precision, ne_lat double precision)
 RETURNS SETOF sponsor_people
 LANGUAGE plpgsql
AS $function$
BEGIN
    RETURN QUERY
    SELECT *
    FROM sponsor_people
    WHERE ST_Contains(
        ST_MakeEnvelope(sw_lng, sw_lat, ne_lng, ne_lat, 4326),
        location_geo::geometry
    );
END;
$function$
