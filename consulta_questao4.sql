SELECT c.company_name, p.phone, s.state_name FROM costumer AS c
                                                INNER JOIN phone_number AS p ON c.id = p.costumer_id
                                                INNER JOIN state AS s ON c.state_code_id = s.state_code
WHERE c.state_code_id = 'SP'
ORDER BY c.company_name