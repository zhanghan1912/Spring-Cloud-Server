package com.cloud.log.controller;

import com.cloud.log.service.LogService;
import com.cloud.model.log.Log;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class LogController {

	@Autowired
	private LogService logService;

	@PostMapping("/logs-anon/internal")
	public void save(@RequestBody Log log) {
		logService.save(log);
	}

	/**
	 * 日志模块<br>
	 * 2018.07.29作废
	 */
	@Deprecated
	@PreAuthorize("hasAuthority('log:query')")
	@GetMapping("/logs-modules")
	public Map<String, String> logModule() {
		return com.cloud.model.log.constants.LogModule.MODULES;
	}

	/**
	 * 日志查询
	 * 
	 * @param params
	 * @return
	 */
	@PreAuthorize("hasAuthority('log:query')")
	@GetMapping("/logs")
	public PageInfo<Log> findLogs(@RequestParam Map<String, Object> params) {
		PageHelper.startPage(Integer.valueOf(String.valueOf(params.get("start"))), Integer.valueOf(String.valueOf(params.get("length"))));
		List<Log> logList = logService.findLogs(params);
		return new PageInfo<>(logList);
	}

}
